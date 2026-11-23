import React from 'react';
import {AutoScene} from '../components/auto';

export const Compare: React.FC = () => <AutoScene k="compare" d={{"tag": "考点五", "title": "总电阻的大小", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "e1", "text": "串联：R_总 {>} 任一个", "size": 44}]}, {"blocks": [{"t": "big", "at": "e2", "text": "并联：R_总 {<} 任一个", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "易错", "at": "e3", "text": "支路越多，并联电阻{越小}"}}} />;
