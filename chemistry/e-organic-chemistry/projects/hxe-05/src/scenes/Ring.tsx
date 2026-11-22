import React from 'react';
import {AutoScene} from '../components/auto';

export const Ring: React.FC = () => <AutoScene k="ring" d={{"tag": "考点五", "title": "苯环上取代基的位置", "blocks": [{"t": "table", "at": "ri1", "head": ["取代方式", "苯环上氢的种类"], "cols": "2fr 1.2fr", "rows": [{"at": "ri1", "cells": ["两个相同取代基：对位", "{1}"]}, {"at": "ri2", "cells": ["两个相同取代基：邻位", "2"]}, {"at": "ri2", "cells": ["两个相同取代基：间位", "3"]}, {"at": "ri2", "cells": ["两个不同取代基：对位", "{2}"]}], "size": 32, "rowHeight": 60}], "callout": {"label": "解题方法", "at": "ri4", "text": "要少峰：首选{对位}"}}} />;
