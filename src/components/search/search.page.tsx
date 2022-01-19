import React, { Fragment, FunctionComponent } from "react";
import { Search, Table, Tag } from "@trussworks/react-uswds";
import { useSearch } from "../../hooks";
import { Page, SubHeader } from "../../common";

export const SearchPage: FunctionComponent = () => {
  const { data, fetch, isLoading } = useSearch();

  return (
    <Fragment>
      <SubHeader />

      <Page>
        <div>
          <Search
            onSubmit={({ target }) => {
              console.log(target);
            }}
          />
        </div>
        <Table bordered={false} fullWidth>
          <thead>
            <td>Username</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Role</td>
          </thead>
          <tbody>
            {data.map(({ username, firstName, lastName, role }) => (
              <tr key={username}>
                <td>{username}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>
                  <Tag>{role}</Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Page>
    </Fragment>
  );
};
