import React from 'react';
import {AutoScene} from '../components/auto';

export const Elastic: React.FC = () => <AutoScene k="elastic" d={{"tag": "考点四", "title": "弹性正碰的结果", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "动量守恒", "at": "e2", "lines": ["m_1v_1 = m_1v_1′ + m_2v_2′"], "c": "red", "size": 30}]}, {"blocks": [{"t": "panel", "title": "动能守恒", "at": "e2", "lines": ["½m_1v_1^2 = ½m_1v_1′^2 + ½m_2v_2′^2"], "c": "orange", "size": 30}]}]}, {"t": "big", "at": "e3", "text": "v_1′ = {(m_1 − m_2)v_1 / (m_1 + m_2)}", "size": 42}, {"t": "big", "at": "e4", "text": "v_2′ = {2m_1v_1 / (m_1 + m_2)}", "size": 42}], "callout": {"label": "要点", "at": "e5", "text": "v_2′ 总与 v_1 {同向}"}}} />;
