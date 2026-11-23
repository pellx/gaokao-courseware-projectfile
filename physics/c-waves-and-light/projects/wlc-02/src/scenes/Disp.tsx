import React from 'react';
import {AutoScene} from '../components/auto';

export const Disp: React.FC = () => <AutoScene k="disp" d={{"tag": "考点八", "title": "加强点的位移", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "h3", "text": "加强 = {振幅最大}"}]}, {"blocks": [{"t": "mark", "ok": false, "at": "h3", "text": "加强 = 位移始终最大"}]}]}, {"t": "text", "at": "h2", "text": "加强点仍在振动，某些时刻位移为 {0}", "size": 36}], "callout": {"label": "易错", "at": "h4", "text": "加强点位移{不总是最大}"}}} />;
