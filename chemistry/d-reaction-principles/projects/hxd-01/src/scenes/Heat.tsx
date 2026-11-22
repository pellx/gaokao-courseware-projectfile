import React from 'react';
import {AutoScene} from '../components/auto';

export const Heat: React.FC = () => <AutoScene k="heat" d={{"tag": "考点一", "title": "反应热与焓变", "blocks": [{"t": "rule", "tag": "反应热", "at": "h1", "text": "等温下，反应体系与环境交换的{热量}", "c": "red"}, {"t": "rule", "tag": "焓变", "at": "h2", "text": "恒压反应热 = 焓变 ΔH，单位 {kJ/mol|orange}", "c": "orange"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "h3", "text": "放热：{ΔH < 0}", "size": 44}]}, {"blocks": [{"t": "big", "at": "h3", "text": "吸热：{ΔH > 0|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "易错", "at": "h4", "text": "kJ/mol 是“{每摩尔反应}”；ΔH 必须带“+”或“−”"}}} />;
