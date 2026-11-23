import React from 'react';
import {AutoScene} from '../components/auto';

export const Life: React.FC = () => <AutoScene k="life" d={{"tag": "考点七", "title": "生活中的超重和失重", "blocks": [{"t": "table", "at": "g1", "head": ["动作", "先", "后"], "cols": "1fr 1fr 1fr", "rows": [{"at": "g2", "cells": ["下蹲", "{失重}", "超重"]}, {"at": "g3", "cells": ["站起", "超重", "{失重}"]}], "size": 34, "rowHeight": 64}, {"t": "text", "at": "g4", "text": "电梯起动、制动：同样按加速度方向判断", "size": 30}], "callout": {"label": "要点", "at": "g4", "text": "下蹲{先失重后超重}，站起{先超重后失重}"}}} />;
