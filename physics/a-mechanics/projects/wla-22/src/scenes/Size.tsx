import React from 'react';
import {AutoScene} from '../components/auto';

export const Size: React.FC = () => <AutoScene k="size" d={{"tag": "考点七", "title": "弹性势能的大小", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "g1", "text": "形变量 x {越大}", "size": 40}]}, {"blocks": [{"t": "big", "at": "g2", "text": "劲度系数 k {越大|orange}", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "g3", "text": "弹性势能{越大}", "size": 36}], "callout": {"label": "易错", "at": "g4", "text": "伸长、压缩同样长度，{弹性势能相等}"}}} />;
