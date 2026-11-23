import React from 'react';
import {AutoScene} from '../components/auto';

export const Orbit: React.FC = () => <AutoScene k="rule" d={{"tag": "考点二", "title": "卫星的运行规律", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "b2", "text": "v = {√(GM/r)}", "size": 40}]}, {"blocks": [{"t": "big", "at": "b2", "text": "ω = {√(GM/r^3)}", "size": 40}]}, {"blocks": [{"t": "big", "at": "b2", "text": "T = {2π√(r^3/GM)|orange}", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "b3", "text": "高轨：v、ω、a_n {越小}，T {越大|orange}", "size": 34}], "callout": {"label": "要点", "at": "b4", "text": "与{卫星质量}无关"}}} />;
