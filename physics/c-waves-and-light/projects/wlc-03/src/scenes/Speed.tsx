import React from 'react';
import {AutoScene} from '../components/auto';

export const Speed: React.FC = () => <AutoScene k="speed" d={{"tag": "考点四", "title": "n = c/v", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "d1", "text": "n = {c/v}", "size": 64}]}, {"blocks": [{"t": "big", "at": "d2", "text": "v = {c/n|orange}", "size": 64, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "d3", "text": "真空中光速最大 → 任何介质 {n > 1}", "size": 36}], "callout": {"label": "要点", "at": "d4", "text": "n 越大，光速{越小}"}}} />;
