import React from 'react';
import {AutoScene} from '../components/auto';

export const Relation: React.FC = () => <AutoScene k="relation" d={{"tag": "考点五", "title": "各量的关系", "blocks": [{"t": "big", "at": "e1", "text": "v = {ωr}", "size": 56}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "e2", "text": "ω = {2π/T}", "size": 42}]}, {"blocks": [{"t": "big", "at": "e2", "text": "v = {2πr/T|orange}", "size": 42, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "big", "at": "e3", "text": "ω = {2πn}（n 单位 r/s）", "size": 38}], "callout": {"label": "要点", "at": "e4", "text": "ω 一定：v ∝ r；v 一定：{ω ∝ 1/r}"}}} />;
