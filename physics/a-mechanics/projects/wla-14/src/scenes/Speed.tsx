import React from 'react';
import {AutoScene} from '../components/auto';

export const Speed: React.FC = () => <AutoScene k="speed" d={{"tag": "考点四", "title": "合力对速率的影响", "blocks": [{"t": "table", "at": "d2", "head": ["夹角", "速率"], "cols": "1fr 1fr", "rows": [{"at": "d2", "cells": ["锐角", "{增大}"]}, {"at": "d3", "cells": ["钝角", "减小"]}, {"at": "d3", "cells": ["垂直", "不变"]}], "size": 34, "rowHeight": 62}], "callout": {"label": "要点", "at": "d4", "text": "切向分力改{大小}，法向分力改{方向}"}}} />;
