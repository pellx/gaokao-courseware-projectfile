import React from 'react';
import {AutoScene} from '../components/auto';

export const Emc: React.FC = () => <AutoScene k="emc" d={{"tag": "考点八", "title": "质能方程", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "h1", "text": "E = {mc^2}", "size": 58}]}, {"blocks": [{"t": "big", "at": "h2", "text": "ΔE = {Δmc^2|orange}", "size": 58, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "h3", "text": "1 u 相当于 {931.5 MeV}", "size": 40}], "callout": {"label": "要点", "at": "h4", "text": "小质量亏损，对应{大能量}"}}} />;
