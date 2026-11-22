import React from 'react';
import {AutoScene} from '../components/auto';

export const Use: React.FC = () => <AutoScene k="use" d={{"tag": "考点三", "title": "性质与用途对应", "blocks": [{"t": "mark", "ok": true, "at": "us2", "text": "NaHCO3 {受热分解产生 CO2} → 膨松剂", "size": 30}, {"t": "mark", "ok": true, "at": "us2", "text": "Al2O3 {熔点高} → 耐火材料", "size": 30}, {"t": "mark", "ok": true, "at": "us2", "text": "ClO2 {强氧化性} → 杀菌消毒", "size": 30}, {"t": "mark", "ok": false, "at": "us3", "text": "SiO2 硬度大 → 光导纤维（应为{导光性}）", "size": 30}, {"t": "mark", "ok": false, "at": "us3", "text": "Fe2O3 能与酸反应 → 红色颜料（应为{红棕色}）", "size": 30}], "callout": {"label": "易错", "at": "us4", "text": "必须是“{因为这个性质，所以有这个用途}”"}, "beat": {"k": "quiz", "at": "us3b", "text": "性质对、用途也对\n{但不对应|red}\n照样选错"}}} />;
