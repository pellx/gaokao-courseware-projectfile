import React from 'react';
import {AutoScene} from '../components/auto';

export const Newton: React.FC = () => <AutoScene k="newton" d={{"tag": "考点一", "title": "牛顿的设想", "blocks": [{"t": "chain", "steps": [{"at": "a1x", "text": "高山上水平抛出"}, {"at": "a2x", "text": "速度越大落得{越远}"}, {"at": "a3x", "text": "不再落回：{人造卫星}"}], "arrows": []}], "callout": {"label": "要点", "at": "a4x", "text": "引力全部提供{向心力}"}, "beat": {"k": "pitch", "at": "a3b", "text": "速度够大\n{成为卫星|red}"}}} />;
