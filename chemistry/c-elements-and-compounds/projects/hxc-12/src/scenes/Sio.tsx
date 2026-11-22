import React from 'react';
import {AutoScene} from '../components/auto';

export const Sio: React.FC = () => <AutoScene k="sio2" d={{"tag": "考点三", "title": "二氧化硅", "blocks": [{"t": "rule", "tag": "用途", "at": "so1", "text": "{光导纤维}；石英、水晶、沙子", "c": "red", "size": 32}, {"t": "rule", "tag": "与碱", "at": "so2", "text": "SiO2 + 2NaOH = Na2SiO3 + H2O：NaOH 溶液用{橡胶塞}", "c": "orange", "size": 32}, {"t": "rule", "tag": "与 HF", "at": "so3", "text": "SiO2 + 4HF = SiF4↑ + 2H2O：刻蚀玻璃；HF 存{塑料瓶|orange}", "c": "green", "size": 32}], "callout": {"label": "易错", "at": "so4", "text": "SiO2 {不与水反应}；与 HF 反应不说明它是碱性氧化物"}, "beat": {"k": "wheel", "at": "so3b", "text": "泥坯和玻璃\n都和{沙子|red}有关"}}} />;
