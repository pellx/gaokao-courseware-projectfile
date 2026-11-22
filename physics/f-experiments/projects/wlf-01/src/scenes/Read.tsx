import React from 'react';
import {AutoScene} from '../components/auto';

export const Read: React.FC = () => <AutoScene k="read" d={{"tag": "考点七", "title": "读数与估读", "blocks": [{"t": "rule", "tag": "规则", "at": "g1", "text": "估读到{分度值的下一位}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "g2", "text": "分度值 1 mm\n读到 {0.1 mm}：12.35 cm", "size": 38}]}, {"blocks": [{"t": "big", "at": "g3", "text": "正对刻度线\n也要写 0：{12.30 cm|orange}", "size": 38, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "易错", "at": "g4", "text": "游标卡尺、秒表、电阻箱{不估读}"}, "beat": {"k": "chibi", "at": "g3b", "text": "视线{正对刻度|red}\n再估读一位"}}} />;
