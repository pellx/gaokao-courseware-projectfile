import React from 'react';
import {AutoScene} from '../components/auto';

export const Size: React.FC = () => <AutoScene k="size" d={{"tag": "考点八", "title": "向心加速度的大小", "blocks": [{"t": "big", "at": "h1", "text": "a_n = {v^2/r} = {ω^2r}", "size": 52}, {"t": "big", "at": "h2", "text": "a_n = {ωv|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}, {"t": "text", "at": "h3", "text": "教材拓展：由 Δv 的矢量关系推导，Δv 指向圆心", "size": 30}], "callout": {"label": "要点", "at": "h4", "text": "v^2/r、ω^2r、ωv {等价}"}}} />;
