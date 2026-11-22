import React from 'react';
import {AutoScene} from '../components/auto';

export const Lenz: React.FC = () => <AutoScene k="lenz" d={{"tag": "考点八", "title": "楞次定律", "blocks": [{"t": "rule", "tag": "楞次定律", "at": "l1", "text": "感应电流的磁场总要{阻碍}引起感应电流的磁通量的变化", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "l2", "text": "靠近：{排斥}", "size": 44}]}, {"blocks": [{"t": "big", "at": "l2", "text": "远离：{吸引|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "l3", "text": "阻碍{不是阻止}，Φ 仍在变化"}, "beat": {"k": "a3", "at": "l2b", "text": "要走了？\n线圈：{来拒去留|red}"}}} />;
