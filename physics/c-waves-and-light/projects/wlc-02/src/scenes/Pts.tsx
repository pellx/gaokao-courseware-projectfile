import React from 'react';
import {AutoScene} from '../components/auto';

export const Pts: React.FC = () => <AutoScene k="pts" d={{"tag": "考点七", "title": "加强点和减弱点", "blocks": [{"t": "text", "at": "g1", "text": "两波源{振动步调相同}", "size": 34}, {"t": "table", "at": "g2", "head": ["", "路程差 Δs", "振幅"], "cols": "1fr 1.6fr 1.4fr", "rows": [{"at": "g2", "cells": ["加强", "{nλ}", "A_1 + A_2"]}, {"at": "g3", "cells": ["减弱", "{(2n+1)λ/2}", "|A_1 − A_2|"]}], "size": 36, "rowHeight": 78}], "callout": {"label": "要点", "at": "g4", "text": "A_1 = A_2 时减弱点振幅为 {0}"}}} />;
