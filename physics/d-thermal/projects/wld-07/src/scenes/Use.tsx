import React from 'react';
import {AutoScene} from '../components/auto';

export const Use: React.FC = () => <AutoScene k="use" d={{"tag": "考点八", "title": "能源的利用方式", "blocks": [{"t": "table", "at": "u1", "head": ["利用方式", "能量转化"], "cols": "1fr 1.6fr", "rows": [{"at": "u1", "cells": ["水力发电", "机械能 → {电能}"]}, {"at": "u2", "cells": ["风力发电", "风能 → {电能}"]}, {"at": "u3", "cells": ["光伏发电", "太阳能 → {电能}"]}, {"at": "u3", "cells": ["光热利用", "太阳能 → {内能|orange}"]}, {"at": "u4", "cells": ["核电站", "核能 → {电能}"]}], "size": 30, "rowHeight": 58}], "callout": {"label": "要点", "at": "u4", "text": "核电站利用{核能}"}}} />;
