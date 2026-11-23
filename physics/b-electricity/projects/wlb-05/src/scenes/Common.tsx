import React from 'react';
import {AutoScene} from '../components/auto';

export const Common: React.FC = () => <AutoScene k="common" d={{"tag": "考点五", "title": "常见的等势面", "blocks": [{"t": "table", "at": "c1", "head": ["电场", "等势面"], "cols": "1fr 1.6fr", "rows": [{"at": "c1", "cells": ["点电荷", "以点电荷为球心的{球面}"]}, {"at": "c2", "cells": ["匀强电场", "垂直于电场线的{平面}"]}, {"at": "c3", "cells": ["静电平衡导体", "{等势体}，表面是等势面"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "要点", "at": "c4", "text": "导体内 E = 0 → {等势体}"}}} />;
