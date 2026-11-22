import React from 'react';
import {AutoScene} from '../components/auto';

export const Temp: React.FC = () => <AutoScene k="temp" d={{"tag": "考点五", "title": "温度的影响", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "tm1", "text": "升温 → {吸热}方向", "size": 42}]}, {"blocks": [{"t": "big", "at": "tm1", "text": "降温 → {放热|orange}方向", "size": 42, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "panel", "title": "2NO2 ⇌ N2O4　ΔH < 0", "at": "tm2", "lines": ["热水：颜色{变深}", "冰水：颜色{变浅|orange}"], "c": "red", "size": 32}], "callout": {"label": "易错", "at": "tm4", "text": "升温：正、逆速率{都增大}，吸热方向增大更多"}, "beat": {"k": "sun", "at": "tm2b", "text": "升温\n平衡向{吸热|red}方向跑"}}} />;
