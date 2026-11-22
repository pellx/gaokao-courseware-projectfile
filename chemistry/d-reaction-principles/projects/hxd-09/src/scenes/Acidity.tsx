import React from 'react';
import {AutoScene} from '../components/auto';

export const Acidity: React.FC = () => <AutoScene k="acidity" d={{"tag": "考点四", "title": "溶液的酸碱性", "blocks": [{"t": "big", "at": "ac1", "text": "酸碱性看 {c(H^+) 与 c(OH^-)} 的相对大小", "size": 40}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "定义", "at": "ac2", "text": "pH = −lg c(H^+)", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "100 ℃", "at": "ac2", "text": "中性溶液 pH = {6|orange}", "c": "orange", "size": 34}]}]}], "callout": {"label": "易错", "at": "ac3", "text": "中性：{c(H^+) = c(OH^-)}，不一定 pH = 7"}, "beat": {"k": "blank", "at": "ac2b", "text": "pH = 7\n{不一定是中性|red}"}}} />;
