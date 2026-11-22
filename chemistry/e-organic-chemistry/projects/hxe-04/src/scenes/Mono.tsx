import React from 'react';
import {AutoScene} from '../components/auto';

export const Mono: React.FC = () => <AutoScene k="mono" d={{"tag": "考点五", "title": "一元取代物数目：等效氢法", "blocks": [{"t": "big", "at": "mo1", "text": "一元取代物数目 = {等效氢种类}", "size": 44}, {"t": "table", "at": "mo3", "head": ["物质", "等效氢种类"], "cols": "1.4fr 1fr", "rows": [{"at": "mo3", "cells": ["CH3CH2CH2CH3", "{2}"]}, {"at": "mo3", "cells": ["(CH3)3CH", "{2}"]}, {"at": "mo3", "cells": ["C(CH3)4", "{1}"]}, {"at": "mo4", "cells": ["C6H5CH3（苯环上）", "{3}"]}], "size": 32, "rowHeight": 58}], "callout": {"label": "解题方法", "at": "mo4", "text": "先找{对称}，只数一半"}}} />;
