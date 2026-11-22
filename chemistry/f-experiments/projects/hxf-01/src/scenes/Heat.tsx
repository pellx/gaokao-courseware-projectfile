import React from 'react';
import {AutoScene} from '../components/auto';

export const Heat: React.FC = () => <AutoScene k="heat" d={{"tag": "考点一", "title": "可加热的仪器", "blocks": [{"t": "table", "at": "he1", "head": ["类别", "仪器"], "cols": "1.2fr 2.4fr", "rows": [{"at": "he1", "cells": ["{直接加热}", "试管、蒸发皿、坩埚、燃烧匙"]}, {"at": "he2", "cells": ["{垫陶土网|orange}", "烧杯、烧瓶、锥形瓶"]}, {"at": "he3", "cells": ["{不能加热}", "量筒、容量瓶、集气瓶、滴定管"]}], "size": 33, "rowHeight": 72}], "callout": {"label": "易错", "at": "he4", "text": "灼烧固体用{坩埚}，蒸发溶液用蒸发皿"}}} />;
