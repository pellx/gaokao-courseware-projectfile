import React from 'react';
import {AutoScene} from '../components/auto';

export const Source: React.FC = () => <AutoScene k="source" d={{"tag": "考点八", "title": "弹力由谁的形变产生", "blocks": [{"t": "big", "at": "s1", "text": "弹力来自{施力物体}的形变", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "书对桌面的压力", "at": "s2", "lines": ["施力物体：书", "{书}的形变"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "桌面对书的支持力", "at": "s3", "lines": ["施力物体：桌面", "{桌面|orange}的形变"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "s4", "text": "谁施力，就是{谁}的形变"}, "beat": {"k": "cheek", "at": "s3b", "text": "脸颊对手的力：{脸颊|red}的形变\n手对脸颊的力：{手|orange}的形变"}}} />;
