import React, { useEffect, useRef, useState } from 'react';

function Skill() {
    const progressItems = [
        { label: 'HTML', value: 90 },
        { label: 'CSS (Tailwind, Bootstrap)', value: 90 },
        { label: 'React Js', value: 90 },
        { label: 'Angular Js', value: 80 },
        { label: 'Vue Js', value: 80 },
        { label: 'Javascript', value: 70 },
        { label: 'Java', value: 70 },
        { label: 'Node Js', value: 70 },
        { label: 'PHP (Laravel)', value: 70 },
        { label: 'RESTApi', value: 70 },
        { label: 'Version Control', value: 90 },
    ];

    const [animatedValues, setAnimatedValues] = useState(progressItems.map(() => 0));
    const sectionRef = useRef(null);
    const observerRef = useRef(null);

    const animateBars = () => {
        progressItems.forEach((item, index) => {
            setTimeout(() => {
                setAnimatedValues(prev => {
                    const updated = [...prev];
                    updated[index] = item.value;
                    return updated;
                });
            }, index * 150);
        });
    };

    const resetBars = () => {
        setAnimatedValues(progressItems.map(() => 0));
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animateBars();
                } else {
                    resetBars(); // Reset when out of view to re-trigger
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observerRef.current.observe(sectionRef.current);
        }

        return () => {
            if (observerRef.current && sectionRef.current) {
                observerRef.current.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="skills"
            className="min-h-screen bg-[#0b0b0c] text-white"
            ref={sectionRef}
        >
            <div className="w-full max-w-7xl mx-auto px-4 py-10 md:py-20">
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-[14px] md:text-[16px] font-[600] text-[#ffc107]"  data-aos="fade-up">Expertise</p>
                    <h1 className="text-[24px] sm:text-[30px] xl:text-[35px] font-[700] uppercase"  data-aos="fade-up">Skills</h1>
                    <hr className="w-[1px] h-[3rem] bg-[#39393d] border-none my-5"  data-aos="fade-up" />
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 pt-10 px-4">
                    {progressItems.map((item, index) => {
                        const percentage = Math.min(animatedValues[index], 100);
                        return (
                            <div key={index}  data-aos="fade-up">
                                <div className="flex justify-between mb-1 text-sm font-medium text-[#fff]">
                                    <span>{item.label}</span>
                                    <span>{percentage}%</span>
                                </div>
                                <div className="w-full bg-[#fff] h-[4px]">
                                    <div
                                        className="bg-[#ffc107] h-full transition-all duration-700 ease-out"
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 px-4">
                    <div className="flex flex-col items-center">
                        <h1 className="text-[24px] sm:text-[30px] xl:text-[35px] font-[700]" data-aos="fade-up">Tool</h1>
                        {[
                            { label: 'Figma', value: '90%' },
                            { label: 'Adobe XD', value: '60%' },
                            { label: 'Photoshop', value: '60%' },
                        ].map((tool, idx) => (
                            <div key={idx} className="w-full mt-4"  data-aos="fade-up">
                                <div className="flex items-center justify-between text-[16px] sm:text-[20px] font-[500]">
                                    <h1>{tool.label}</h1>
                                    <p className="text-[#ffc107]">{tool.value}</p>
                                </div>
                                <hr className="border-t-2 border-[#585b5c] w-full my-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
