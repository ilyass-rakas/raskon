import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';

export default function AvailabilityCalendar() {
  const { t } = useTranslation();
  // FIXED: Initialize with the current real-world date instead of hardcoded March 2026
  const [currentDate, setCurrentDate] = useState(new Date()); 
  const [bookedDates, setBookedDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastSyncTime, setLastSyncTime] = useState(null);

  // FIXED: Wrapped in useCallback to prevent unnecessary re-renders
  const fetchBookedDates = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/availability/booked-dates');
      
      if (!response.ok) {
        throw new Error('Failed to fetch availability data');
      }
      
      const data = await response.json();
      setBookedDates(data.bookedDates || []);
      setLastSyncTime(new Date());
    } catch (err) {
      // FIXED: Fallback to an empty array instead of hardcoded dates if API is unreachable
      console.warn('API unavailable:', err.message);
      setBookedDates([]);
      setLastSyncTime(new Date());
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch and auto-refresh every 5 minutes (300000 ms)
  useEffect(() => {
    fetchBookedDates();
    
    const syncInterval = setInterval(() => {
      fetchBookedDates();
    }, 300000);

    return () => clearInterval(syncInterval);
  }, [fetchBookedDates]);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDay = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateBooked = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return bookedDates.includes(dateStr);
  };

  const isDateInPast = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return checkDate < today;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDay(currentDate);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <section className="bg-brand-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('calendar.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('calendar.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2 bg-brand-gray rounded-lg p-8 border border-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handlePrevMonth}
                className="text-brand-gold hover:text-brand-gold-light transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-white">{monthName}</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleNextMonth}
                  className="text-brand-gold hover:text-brand-gold-light transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button
                  onClick={fetchBookedDates}
                  disabled={loading}
                  className="text-brand-gold hover:text-brand-gold-light transition disabled:opacity-50"
                  title="Refresh availability"
                >
                  <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-gray-400 font-semibold text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                const isBooked = day && isDateBooked(day);
                const isPast = day && isDateInPast(day);

                return (
                  <div
                    key={index}
                    className={`aspect-square flex items-center justify-center rounded-lg font-semibold text-sm ${
                      !day
                        ? 'bg-transparent'
                        : isBooked
                        ? 'bg-red-900/30 text-red-400 border border-red-900 cursor-not-allowed'
                        : isPast
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-brand-black text-white hover:bg-brand-gold hover:text-brand-black cursor-pointer transition'
                    }`}
                    title={isBooked ? 'Booked' : isPast ? 'Past date' : 'Available'}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="bg-brand-gray rounded-lg p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">Legend</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-black border border-gray-600 rounded lg:hover:bg-brand-gold transition"></div>
                <span className="text-gray-300">{t('calendar.available')}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-900/30 border border-red-900 rounded"></div>
                <span className="text-gray-300">{t('calendar.booked')}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-700 rounded"></div>
                <span className="text-gray-300">{t('calendar.unavailable')}</span>
              </div>
            </div>

            {/* Sync Status */}
            <div className="mt-8 pt-8 border-t border-gray-600">
              <div className="mb-4">
                <p className="text-xs text-gray-400 mb-2">Sync Status</p>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : error ? 'bg-red-500' : 'bg-green-500'}`}></div>
                  <span className="text-sm text-gray-300">
                    {loading ? 'Syncing...' : error ? 'Sync failed' : 'Synced'}
                  </span>
                </div>
              </div>
              
              {lastSyncTime && (
                <p className="text-xs text-gray-500">
                  Last sync: {lastSyncTime.toLocaleTimeString()}
                </p>
              )}
            </div>

            {/* Info Box */}
            <div className="mt-6 pt-6 border-t border-gray-600">
              <p className="text-sm text-gray-400">
                {t('calendar.info')}
              </p>
            </div>

            {/* CTA */}
            <button className="w-full mt-8 bg-brand-gold text-brand-black font-bold py-3 rounded-lg hover:bg-brand-gold-light transition">
              {t('calendar.book')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}