import React from 'react';
import {AutoScene} from '../components/auto';

export const Postulate: React.FC = () => <AutoScene k="postulate" d={{"tag": "考点三", "title": "爱因斯坦的两个假设", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "c1", "text": "相对性原理\n惯性系中{物理规律形式相同}", "size": 38}]}, {"blocks": [{"t": "big", "at": "c2", "text": "光速不变原理\n惯性系中{真空光速相同|orange}", "size": 38, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "c3", "text": "1905 年：{狭义相对论}", "size": 34}], "callout": {"label": "易错", "at": "c4", "text": "前提是{惯性参考系}；光速与光源、观察者的运动无关"}}} />;
