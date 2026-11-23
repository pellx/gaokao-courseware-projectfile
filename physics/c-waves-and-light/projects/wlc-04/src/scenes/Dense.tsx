import React from 'react';
import {AutoScene} from '../components/auto';

export const Dense: React.FC = () => <AutoScene k="dense" d={{"tag": "考点一", "title": "光疏介质与光密介质", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a1", "text": "光疏：n {较小|orange}", "size": 46, "c": "orange", "soft": "orangeSoft"}]}, {"blocks": [{"t": "big", "at": "a1", "text": "光密：n {较大}", "size": 46}]}]}, {"t": "text", "at": "a2", "text": "{相对}概念：水对空气是光密，对玻璃是光疏", "size": 34}], "callout": {"label": "易错", "at": "a4", "text": "比的是{折射率}，不是密度"}}} />;
