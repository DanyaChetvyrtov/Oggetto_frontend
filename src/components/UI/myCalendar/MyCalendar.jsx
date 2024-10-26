import React, { useState } from "react"; // Один импорт React
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css'; // Импортируйте тему
import 'primereact/resources/primereact.min.css'; // Импортируйте основные стили
import 'primeicons/primeicons.css'; // Импортируйте иконки
import './MyCalendar.module.css'; // Импортируйте ваши стили

export default function MyCalendar() {
    const [dates, setDates] = useState(null);

    // Функция форматирования даты
    const formatDate = (date) => date ? date.toLocaleDateString() : '';

    return (
        <div className="card flex justify-content-center">
            <Calendar
                value={dates}
                onChange={(e) => setDates(e.value)}
                selectionMode="range"
                readOnlyInput
                showButtonBar
                inline
            />
            {dates && dates.length === 2 && (
                <div style={{ marginBlockStart: '10px' }}>
                    <p>Первая дата: {formatDate(dates[0])}</p>
                    <p>Последняя дата: {formatDate(dates[1])}</p>
                </div>
            )}
        </div>
    );
}
