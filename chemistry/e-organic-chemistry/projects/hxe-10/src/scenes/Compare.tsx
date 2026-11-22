import React from 'react';
import {AutoScene} from '../components/auto';

export const Compare: React.FC = () => <AutoScene k="compare" d={{"tag": "考点八", "title": "醇羟基与酚羟基的比较", "blocks": [{"t": "table", "at": "cp1", "head": ["性质", "醇羟基", "酚羟基"], "cols": "1.6fr 1fr 1fr", "rows": [{"at": "cp1", "cells": ["与 Na", "✓", "✓"]}, {"at": "cp2", "cells": ["与 NaOH、Na2CO3", "{×}", "✓"]}, {"at": "cp2", "cells": ["浓溴水、FeCl3 显色", "×", "✓"]}, {"at": "cp3", "cells": ["消去、催化氧化", "✓", "{×}"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "cp4", "text": "算 NaOH：醇羟基{不算}，酚羟基 1 mol"}}} />;
