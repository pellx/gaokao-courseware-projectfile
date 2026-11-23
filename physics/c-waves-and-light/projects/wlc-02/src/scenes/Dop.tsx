import React from 'react';
import {AutoScene} from '../components/auto';

export const Dop: React.FC = () => <AutoScene k="dop" d={{"tag": "考点九", "title": "多普勒效应", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "i1", "text": "靠近：接收频率{变大}", "size": 42}]}, {"blocks": [{"t": "big", "at": "i2", "text": "远离：接收频率{变小|orange}", "size": 42, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "i3", "text": "奥地利物理学家{多普勒}首先发现", "size": 34}], "callout": {"label": "易错", "at": "i4", "text": "波源频率{不变}，变的是接收频率"}, "beat": {"k": "point", "at": "i3b", "text": "靠近\n接收频率{变大|red}"}}} />;
