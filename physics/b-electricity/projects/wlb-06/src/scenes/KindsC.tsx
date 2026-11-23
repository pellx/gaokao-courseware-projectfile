import React from 'react';
import {AutoScene} from '../components/auto';

export const KindsC: React.FC = () => <AutoScene k="kinds" d={{"tag": "考点六", "title": "常用电容器", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "固定", "at": "k1", "text": "电容{不变}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "可变", "at": "k1", "text": "电容{可调|orange}", "c": "orange", "size": 32}]}]}, {"t": "items", "items": [{"at": "k2", "text": "电解电容器：{有正负极}"}, {"at": "k3", "text": "应用：闪光灯、{电容式传感器}"}], "size": 32}], "callout": {"label": "要点", "at": "k4", "text": "电解电容器{有极性}"}, "beat": {"k": "a3", "at": "k3b", "text": "电解电容器\n极性{不能接反|red}"}}} />;
