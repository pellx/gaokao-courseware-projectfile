import React from 'react';
import {AutoScene} from '../components/auto';

export const Strain: React.FC = () => <AutoScene k="strain" d={{"tag": "考点六", "title": "电阻应变片", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "拉伸", "at": "s1", "lines": ["l 变长、S 变小", "电阻{变大}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "压缩", "at": "s2", "lines": ["l 变短、S 变大", "电阻{变小}"], "c": "orange", "size": 34}]}]}, {"t": "chain", "steps": [{"at": "s3", "text": "受力"}, {"at": "s3", "text": "形变", "c": "orange"}, {"at": "s3", "text": "{电阻变化}"}], "arrows": ["弹性梁", "应变片"]}], "callout": {"label": "要点", "at": "s4", "text": "形变 → {电阻变化}：力传感器"}, "beat": {"k": "squeeze", "at": "s3b", "text": "一受力就形变\n{电阻|red}跟着变"}}} />;
