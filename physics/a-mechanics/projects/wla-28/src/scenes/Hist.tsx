import React from 'react';
import {AutoScene} from '../components/auto';

export const Hist: React.FC = () => <AutoScene k="hist" d={{"tag": "考点八", "title": "火箭的发展", "blocks": [{"t": "chain", "steps": [{"at": "h1", "text": "古代：{火药}火箭"}, {"at": "h2", "text": "现代：{多级}运载火箭"}], "arrows": []}, {"t": "items", "items": [{"at": "h3", "text": "各级燃料用完就{脱落}，减轻质量"}, {"at": "h4", "text": "发射卫星、载人飞船、空间站"}], "size": 34}], "callout": {"label": "要点", "at": "h5", "text": "多级火箭：{逐级脱落}"}}} />;
