import React from 'react';
import {AutoScene} from '../components/auto';

export const Dir: React.FC = () => <AutoScene k="dir" d={{"tag": "考点二", "title": "洛伦兹力的方向", "blocks": [{"t": "table", "at": "b2", "head": ["左手", "对应"], "cols": "1fr 2fr", "rows": [{"at": "b2", "cells": ["掌心", "磁感线{垂直穿入}"]}, {"at": "b2", "cells": ["四指", "{正电荷}运动方向"]}, {"at": "b3", "cells": ["四指（负电荷）", "运动的{反方向}"]}, {"at": "b2", "cells": ["拇指", "{洛伦兹力}方向"]}], "size": 30, "rowHeight": 60}], "callout": {"label": "要点", "at": "b4", "text": "F 既垂直于 {v}，又垂直于 {B}"}}} />;
