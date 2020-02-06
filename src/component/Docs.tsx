import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { main } from "../util/doc_utils";
import Link from "./Link";
import Markdown from "./Markdown";

interface Props {
  source: string;
}

export default function Docs(props: Props) {
  const location = useLocation();
  const docs = main(location.pathname, props.source);

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} sm={4}>
        <List>
          {docs.map(d => {
            const link = <Link to={`?doc#${d.name}`}>{d.name}</Link>;
            return (
              <ListItem key={d.name}>
                <ListItemText primary={link} secondary={d.typestr} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={12} sm={8}>
        {docs.map(d => {
          const href = "?doc#" + d.name;
          const title = (
            <Link to={href} color="inherit">
              <code>{d.name}</code>
            </Link>
          );
          const subheader = <code>{d.typestr}</code>;
          const frag = location.hash.substr(1);
          const raised = frag === d.name;
          let docstr = null;
          if (d.docstr) {
            docstr = <Markdown source={d.docstr} />;
          }
          let args = null;
          if (d.args) {
            args = (
              <div>
                <b>Arguments</b>
                <List>
                  {d.args.map(arg => {
                    const name = <code>{`${arg.name}: ${arg.typestr}`}</code>;
                    return (
                      <ListItem key={arg.name}>
                        <ListItemText primary={name} secondary={arg.docstr} />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            );
          }
          let ret = null;
          if (d.retType) {
            ret = (
              <p>
                <b>Return Type</b> {d.retType}
              </p>
            );
          }
          return (
            <Box key={d.name} my={3} id={d.name}>
              <Card raised={raised}>
                <CardHeader title={title} subheader={subheader} />
                <CardContent>
                  {docstr}
                  {args}
                  {ret}
                  {/*
                    <CodeBlock language="json" value={JSON.stringify(d, null, 1)} />
                    */}
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}
