import React from 'react';
import {AutoScene} from '../components/auto';

export const Disp: React.FC = () => <AutoScene k="disp" d={{"tag": "考点四", "title": "平抛运动的位移", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "d1", "text": "x = {v_0t}", "size": 44}]}, {"blocks": [{"t": "big", "at": "d1", "text": "y = {½gt^2|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "big", "at": "d2", "text": "tanα = {gt/2v_0}", "size": 44}, {"t": "big", "at": "d3", "text": "tanθ = {2tanα}", "size": 44}], "callout": {"label": "易错", "at": "d4", "text": "tanθ = 2tanα，{不是} θ = 2α"}}} />;
