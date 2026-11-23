import React from 'react';
import {AutoScene} from '../components/auto';

export const Volt: React.FC = () => <AutoScene k="volt" d={{"tag": "考点七", "title": "击穿电压与额定电压", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "击穿电压", "at": "v1", "text": "超过它电介质{被击穿}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "额定电压", "at": "v2", "text": "外壳标注，正常工作的{最大电压|orange}", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "v3", "text": "U_额 {<} U_击穿", "size": 50}], "callout": {"label": "易错", "at": "v3", "text": "额定电压{低于}击穿电压"}}} />;
