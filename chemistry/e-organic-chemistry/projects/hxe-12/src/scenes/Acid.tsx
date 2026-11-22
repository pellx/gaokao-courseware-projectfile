import React from 'react';
import {AutoScene} from '../components/auto';

export const Acid: React.FC = () => <AutoScene k="acid" d={{"tag": "考点一", "title": "羧酸的酸性", "blocks": [{"t": "big", "at": "ac2", "text": "羧酸 > 碳酸 > {苯酚} > HCO3^-", "size": 44}, {"t": "table", "at": "ac1", "head": ["试剂", "醇羟基", "酚羟基", "羧基"], "cols": "1.2fr 1fr 1fr 1fr", "rows": [{"at": "ac1", "cells": ["Na", "✓", "✓", "✓"]}, {"at": "ac1", "cells": ["NaOH", "×", "✓", "✓"]}, {"at": "ac3", "cells": ["NaHCO3", "×", "×", "{✓}"]}], "size": 32, "rowHeight": 60}], "callout": {"label": "解题方法", "at": "ac4", "text": "活泼性：{羧基 > 酚羟基 > 水 > 醇羟基}"}}} />;
