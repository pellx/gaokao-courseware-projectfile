import React from 'react';
import {AutoScene} from '../components/auto';

export const Step: React.FC = () => <AutoScene k="step" d={{"tag": "考点五", "title": "实验步骤", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "N 极", "at": "s1", "lines": ["N 极插入", "N 极抽出"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "S 极", "at": "s2", "lines": ["S 极插入", "S 极抽出"], "c": "orange", "size": 34}]}]}, {"t": "text", "at": "s3", "text": "每次观察：电流表{指针的偏转方向}", "size": 32}], "callout": {"label": "要点", "at": "s4", "text": "变化的因素：{原磁场方向} 和 {磁通量增减}"}}} />;
