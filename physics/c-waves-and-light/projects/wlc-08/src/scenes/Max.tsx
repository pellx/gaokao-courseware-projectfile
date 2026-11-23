import React from 'react';
import {AutoScene} from '../components/auto';

export const Max: React.FC = () => <AutoScene k="max" d={{"tag": "考点一", "title": "麦克斯韦电磁场理论", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a1", "text": "变化的磁场 → {电场}", "size": 44}]}, {"blocks": [{"t": "big", "at": "a2", "text": "变化的电场 → {磁场|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "rule", "tag": "电磁场", "at": "a3", "text": "周期性变化的电场和磁场{不可分割}", "c": "red"}], "callout": {"label": "易错", "at": "a4", "text": "{恒定}的场不产生场"}}} />;
