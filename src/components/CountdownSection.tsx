import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Zap } from 'lucide-react';

const CountdownSection = () => {
  // Set collection period end date (you can modify this date)
  const endDate = new Date('2024-12-31T23:59:59').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const isUrgent = timeLeft.days <= 7;
  const isVeryUrgent = timeLeft.days <= 3;

  return (
    <section className={`py-8 relative overflow-hidden ${
      isVeryUrgent ? 'bg-gradient-to-r from-red-50 to-orange-50' : 
      isUrgent ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : 
      'bg-gradient-to-r from-primary/5 to-sustainability/5'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className={`p-2 rounded-full ${
              isVeryUrgent ? 'bg-red-100' : isUrgent ? 'bg-yellow-100' : 'bg-primary/10'
            }`}>
              <Clock className={`w-6 h-6 ${
                isVeryUrgent ? 'text-red-600' : isUrgent ? 'text-yellow-600' : 'text-primary'
              }`} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Collection Period Ending Soon
              </h2>
              <p className="text-sm text-muted-foreground">
                Don't miss your chance to participate in the PPE Recycling Initiative
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border">
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${
                  isVeryUrgent ? 'text-red-600' : isUrgent ? 'text-yellow-600' : 'text-primary'
                }`}>
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action Message */}
          <div className={`p-4 rounded-xl border-l-4 ${
            isVeryUrgent ? 'bg-red-50 border-red-500' : 
            isUrgent ? 'bg-yellow-50 border-yellow-500' : 
            'bg-primary/10 border-primary'
          }`}>
            <div className="flex items-center gap-3 justify-center">
              <Zap className={`w-5 h-5 ${
                isVeryUrgent ? 'text-red-600' : isUrgent ? 'text-yellow-600' : 'text-primary'
              }`} />
              <p className={`font-semibold ${
                isVeryUrgent ? 'text-red-800' : isUrgent ? 'text-yellow-800' : 'text-primary'
              }`}>
                {isVeryUrgent ? 'URGENT: Last chance to donate your PPE!' : 
                 isUrgent ? 'Act fast! Collection period ending soon.' : 
                 'Still time to make an impact - donate your PPE today!'}
              </p>
            </div>
          </div>

          {/* End Date Info */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Collection period ends: {new Date(endDate).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</span>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      {isUrgent && (
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${
          isVeryUrgent ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-yellow-500 to-orange-500'
        } animate-pulse`} />
      )}
    </section>
  );
};

export default CountdownSection;