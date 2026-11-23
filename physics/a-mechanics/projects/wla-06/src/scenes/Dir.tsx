import React from 'react';
import {AutoScene} from '../components/auto';

export const Dir: React.FC = () => <AutoScene k="dir" d={{"tag": "考点六", "title": "弹力的方向", "blocks": [{"t": "table", "at": "d1", "head": ["弹力", "方向"], "cols": "1fr 2.2fr", "rows": [{"at": "d1", "cells": ["压力", "{垂直接触面}，指向被压物体"]}, {"at": "d2", "cells": ["支持力", "{垂直接触面}，指向被支持物体"]}, {"at": "d3", "cells": ["绳的拉力", "{沿绳}，指向绳收缩的方向"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "要点", "at": "d4", "text": "与施力物体{形变方向相反}"}}} />;
