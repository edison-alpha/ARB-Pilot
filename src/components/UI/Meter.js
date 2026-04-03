import { useState, useRef, useCallback } from "react";
import styles from "@/app/page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Meter() {
    const [temperature, setTemperature] = useState("000");
    const [pressure, setPressure] = useState("000");
    
    const prevPressureRef = useRef("000");
    const prevTemperatureRef = useRef("000");
    const animationKeyRef = useRef(0);

    const calculateActions = (progress) => {
        return Math.round(10 + progress * 90);
    };

    const calculateConfidence = (progress) => {
        return Math.round(60 + progress * 39);
    };

    useGSAP(() => {
        gsap.to(`.${styles.meter}`, {
            scrollTrigger: {
                trigger: `.${styles.container}`,
                toggleActions: 'play none none none',
                start: 'top bottom',
                end: '98.75% bottom',
                onUpdate: (self) => {
                    // progress goes from 0 to 1
                    const progress = self.progress;
                    
                    // Calculate values based on progress
                    const currentPressure = calculateActions(progress);
                    const currentTemperature = calculateConfidence(progress);
                    
                        const pressureStr = String(currentPressure).padStart(3, '0');
                    const temperatureStr = String(currentTemperature).padStart(4, '0');
                    
                    // Store previous values before updating
                    setPressure((prev) => {
                        prevPressureRef.current = prev;
                        return pressureStr;
                    });
                    setTemperature((prev) => {
                        prevTemperatureRef.current = prev;
                        return temperatureStr;
                    });
                },

            }
        }) 
    }, []);

    const renderDigits = useCallback((value, prevValue, keyPrefix) => {
        if (!value) return null;
        
        return value.split('').map((digit, index) => {
            const shouldAnimate = prevValue && prevValue[index] !== digit;
            const uniqueKey = `${keyPrefix}-${index}-${digit}`;
            
            // Increment the key only if the animation is needed
            if (shouldAnimate) {
                animationKeyRef.current += 1;
            }
            
            return (
                <span 
                    key={shouldAnimate ? `${uniqueKey}-${animationKeyRef.current}` : uniqueKey}
                    className={`${styles.digit} ${shouldAnimate ? styles.animate : ''}`}
                >
                    {digit}
                </span>
            );
        });
    }, []);
    
    return (
        <div className={`${styles.meter}`}>
            <div className={styles.meterBar}>
                (+) {renderDigits(pressure, prevPressureRef.current, 'actions')} ACTIONS — {renderDigits(temperature, prevTemperatureRef.current, 'confidence')}% CONFIDENCE
            </div>
        </div>
    )
}