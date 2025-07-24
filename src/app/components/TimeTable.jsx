"use client"
import React, { useState } from "react";
import dayjs from "dayjs";

const timetable = {
    "monday": {
        "9am-11am": {
            "duration": 2,
            "course_name": "Operating Systems Lab",
            "course_code": "CSP341",
            "course_type": "Lab",
            "venue": "RM-235 (Signal Processing Lab)",
            "teacher": "Guest Faculty"
        },
        "11am-12pm": {
            "duration": 1,
            "course_name": "Digital MOS IC Design",
            "course_code": "ECT305",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Dr. Ashok Kumar Kherodia"
        },
        "12pm-1pm": {
            "duration": 1,
            "course_name": "Digital Communication",
            "course_code": "ECT303",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Dr. Anand Agrawal"
        },
        "2pm-3pm": {
            "duration": 1,
            "course_name": "MEMS and NEMS",
            "course_code": "ECT321",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Dr. Ajay Kumar"
        },
        "3pm-5pm": {
            "duration": 2,
            "course_name": "Study of Technical Articles",
            "course_code": "ECD301",
            "course_type": "Lab",
            "venue": "N/A",
            "teacher": "Dr. Anand Agrawal and Dr. Chetna Sharma"
        },
        "5pm-6pm": {
            "duration": 1,
            "course_name": "Study of Technical Articles",
            "course_code": "ECD301",
            "course_type": "Theory",
            "venue": "N/A",
            "teacher": "Dr. Anand Agrawal and Dr. Chetna Sharma"
        }
    },
    "tuesday": {
        "9am-11am": {
            "duration": 2,
            "course_name": "Digital MOS IC Design Lab",
            "course_code": "ECP305",
            "course_type": "Lab",
            "venue": "RM-221 (VLSI and Embedded System Design Lab)",
            "teacher": "Dr. Ajay Kumar and Teaching Associate"
        },
        "11am-12pm": {
            "duration": 1,
            "course_name": "RF and Microwave Engineering",
            "course_code": "ECT307",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Dr. Chetna Sharma"
        },
        "12pm-1pm": {
            "duration": 1,
            "course_name": "Digital Signal Processing",
            "course_code": "ECT301",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Guest Faculty"
        },
        "2pm-3pm": {
            "duration": 1,
            "course_name": "Operating Systems",
            "course_code": "CST341",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Guest Faculty"
        },
        "5pm-6pm": {
            "duration": 1,
            "course_name": "Study of Technical Articles",
            "course_code": "ECD301",
            "course_type": "Theory",
            "venue": "N/A",
            "teacher": "Dr. Anand Agrawal and Dr. Chetna Sharma"
        }
    },
    "wednesday": {
        "11am-12pm": {
            "duration": 1,
            "course_name": "Digital MOS IC Design",
            "course_code": "ECT305",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Dr. Ashok Kumar Kherodia"
        },
        "12pm-1pm": {
            "duration": 1,
            "course_name": "Digital Communication",
            "course_code": "ECT303",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Dr. Anand Agrawal"
        },
        "2pm-3pm": {
            "duration": 1,
            "course_name": "Digital Signal Processing",
            "course_code": "ECT301",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Guest Faculty"
        },
        "4pm-6pm": {
            "duration": 2,
            "course_name": "Digital Signal Processing Lab",
            "course_code": "ECP301",
            "course_type": "Lab",
            "venue": "RM-235 (Signal Processing Lab)",
            "teacher": "Guest Faculty and Teaching Associate"
        }
    },
    "thursday": {
        "9am-10am": {
            "duration": 1,
            "course_name": "MEMS and NEMS",
            "course_code": "ECT321",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Dr. Ajay Kumar"
        },
        "10am-11am": {
            "duration": 1,
            "course_name": "Digital Communication",
            "course_code": "ECT303",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Dr. Anand Agrawal"
        },
        "11am-12pm": {
            "duration": 1,
            "course_name": "Digital Signal Processing",
            "course_code": "ECT301",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Guest Faculty"
        },
        "12pm-1pm": {
            "duration": 1,
            "course_name": "Operating Systems",
            "course_code": "CST341",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Guest Faculty"
        },
        "2pm-3pm": {
            "duration": 1,
            "course_name": "RF and Microwave Engineering",
            "course_code": "ECT307",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Dr. Chetna Sharma"
        },
    },
    "friday": {
        "9am-11am": {
            "duration": 2,
            "course_name": "Digital Communication Lab",
            "course_code": "ECP303",
            "course_type": "Lab",
            "venue": "RM-235",
            "teacher": "Dr. Anand Agrawal and Teaching Associate"
        },
        "11am-12pm": {
            "duration": 1,
            "course_name": "Operating Systems",
            "course_code": "ECT305",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Guest Faculty"
        },
        "12pm-1pm": {
            "duration": 1,
            "course_name": "Operating Systems",
            "course_code": "CST341",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Guest Faculty"
        },
        "2pm-3pm": {
            "duration": 1,
            "course_name": "RF and Microwave Engineering",
            "course_code": "ECT307",
            "course_type": "Theory",
            "venue": "RM-LT6 (Lecture Theatre - 6)",
            "teacher": "Dr. Chetna Sharma"
        },
    }
};

const dayMap = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
};

export default function TimeTable() {
    const [selectedDay, setSelectedDay] = useState(dayMap[dayjs().day()]);
    const todaySchedule = timetable[selectedDay] || {};

    const totalHours = Object.values(todaySchedule).reduce(
        (acc, cls) => acc + cls.duration,
        0
    );

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 capitalize">{selectedDay}'s Schedule</h1>
            <p className="text-lg mb-6">Total Working Hours: {totalHours}</p>

            <div className="mb-6 flex flex-wrap gap-2">
                {Object.values(dayMap).map((day) => (
                    <button
                        key={day}
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${selectedDay === day ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                            }`}
                        onClick={() => setSelectedDay(day)}
                    >
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {Object.entries(todaySchedule).map(([time, details], i) => (
                    <div
                        key={i}
                        className={`p-4 rounded-xl shadow-md border-l-8 ${details.course_type === "Lab"
                            ? "bg-blue-100 border-blue-500"
                            : "bg-green-100 border-green-500"
                            }`}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className={`text-xl font-semibold ${details.course_type === "Lab"
                                ? "text-blue-500"
                                : "text-green-500"
                                }`}
                            >{details.course_name}</h2>
                            <span className="text-sm font-mono text-violet-500">{time}</span>
                        </div>
                        <p className="text-sm text-gray-800">
                            <strong>Code:</strong> {details.course_code} | <strong>Type:</strong> {details.course_type} |{' '}
                            <strong>Duration:</strong> {details.duration} hr(s)
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Venue:</strong> {details.venue}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Teacher:</strong> {details.teacher}
                        </p>
                    </div>
                ))}
                {Object.keys(todaySchedule).length === 0 && (
                    <p className="text-gray-500 italic">No classes scheduled for {selectedDay}.</p>
                )}
            </div>
        </div>
    );
}
