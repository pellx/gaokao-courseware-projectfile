import React from 'react';
import {AutoScene} from '../components/auto';

export const MeterG: React.FC = () => <AutoScene k="meterG" d={{"tag": "考点六", "title": "表头", "blocks": [{"t": "table", "at": "g2", "head": ["参数", "含义"], "cols": "1fr 2fr", "rows": [{"at": "g2", "cells": ["R_g", "表头{内阻}"]}, {"at": "g2", "cells": ["I_g", "{满偏电流}"]}, {"at": "g2", "cells": ["U_g = I_gR_g", "{满偏电压}"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "要点", "at": "g3", "text": "表头 = 能显示自身电流的{电阻}"}}} />;
