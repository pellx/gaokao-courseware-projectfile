import React from 'react';
import {AutoScene} from '../components/auto';

export const Induce: React.FC = () => <AutoScene k="induce" d={{"tag": "考点三", "title": "静电感应", "blocks": [{"t": "rule", "tag": "现象", "at": "i1", "text": "带电体靠近导体，导体中{自由电子}移动", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "i2", "text": "近端：{异种电荷}", "size": 40}]}, {"blocks": [{"t": "big", "at": "i2", "text": "远端：{同种电荷|orange}", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "i3", "text": "用静电感应使导体带电 → {感应起电}", "size": 32}], "callout": {"label": "要点", "at": "i4", "text": "近异远同，导体总电荷量{不变}"}}} />;
