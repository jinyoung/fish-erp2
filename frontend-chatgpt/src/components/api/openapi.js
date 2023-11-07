let apiSpec = `
paths:
  '/purchases/{id}/sale':
    summary: sale operation on purchases
    put:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                itemId:
                  description: itemId of this Sale
                  type: string
                qty:
                  description: qty of this Sale
                  type: integer
            examples:
              Example 0:
                value:
                  itemId: N/A
                  qty: N/A
      parameters:
        - name: id
          description: Sale name
          schema:
            type: integer
          in: path
          required: true
          examples:
            Example 0:
              value: null
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Purchase'
              examples:
                Example 0:
                  value:
                    itemId: N/A
                    stock: N/A
          description: Sale Operation
      operationId: Sale
      summary: Sale
      description: Sale
  /accounts:
    summary: Global operations on accounts
    get:
      tags:
        - accounts
      responses:
        '200':
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Account'
              examples:
                accounts_json:
                  value:
                    - accountName: A string
                      representative: A string
                      businessRegistrationNumber: A string
                      address: value
                      industry: A string
                      category: A string
                      customerType: A string
          description: Get list of accounts
      operationId: GetAccount
      summary: Get list of accounts
    post:
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Account'
            examples:
              '1':
                value:
                  accountName: A string
                  representative: A string
                  businessRegistrationNumber: A string
                  address: value
                  industry: A string
                  category: A string
                  customerType: A string
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Account'
              examples:
                '1':
                  value:
                    accountName: A string
                    representative: A string
                    businessRegistrationNumber: A string
                    address: value
                    industry: A string
                    category: A string
                    customerType: A string
          description: Changed Account
      operationId: Post Account
      summary: Post Account
  '/accounts/{id}':
    summary: Specific operation on accounts
    get:
      parameters:
        - examples:
            A string:
              value: A string
          name: id
          description: Account name
          schema:
            type: string
          in: path
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Account'
              examples:
                '1':
                  value:
                    accountName: A string
                    representative: A string
                    businessRegistrationNumber: A string
                    address: value
                    industry: A string
                    category: A string
                    customerType: A string
          description: accounts with specified id
      operationId: GetAccountById
      summary: Get Account by id
      description: Get Account by id
    patch:
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Account'
            examples:
              '1':
                value:
                  accountName: A string
                  representative: A string
                  businessRegistrationNumber: A string
                  address: value
                  industry: A string
                  category: A string
                  customerType: A string
        required: true
      parameters:
        - examples:
            '1':
              value: 1
          name: accountName
          description: Account name
          schema:
            type: string
          in: path
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Account'
              examples:
                '1':
                  value:
                    accountName: A string
                    representative: A string
                    businessRegistrationNumber: A string
                    address: value
                    industry: A string
                    category: A string
                    customerType: A string
          description: Changed Account
      operationId: PatchAccount
      summary: Patch existing Account
    parameters:
      - name: id
        description: Account id
        schema:
          type: string
        in: path
        required: true
openapi: 3.0.2
components:
  schemas:
    Account:
      title: Root Type for Account
      description: The root of the Account type's schema.
      type: object
      properties:
        accountName:
          description: accountName of this Account
          type: string
        representative:
          description: representative of this Account
          type: string
        businessRegistrationNumber:
          description: businessRegistrationNumber of this Account
          type: string
        address:
          description: address of this Account
          type: string
        industry:
          description: industry of this Account
          type: string
        category:
          description: category of this Account
          type: string
        customerType:
          description: customerType of this Account
          type: string
      example:
        accountName: A string
        representative: A string
        businessRegistrationNumber: A string
        address: value
        industry: A string
        category: A string
        customerType: A string
tags:
  - name: Account
    description: Account resource
info:
  version: 0.0.1
  description: API definition of
  contact:
    name: creator's name
    url: 'http://creator.homepage.address'
    email: creator@creator.com
  license:
    name: MIT License
    url: 'https://opensource.org/licenses/MIT'
---
paths:
  '/purchases/{id}/sale':
    summary: sale operation on purchases
    put:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                itemId:
                  description: itemId of this Sale
                  type: string
                qty:
                  description: qty of this Sale
                  type: integer
            examples:
              Example 0:
                value:
                  itemId: N/A
                  qty: N/A
      parameters:
        - name: id
          description: Sale name
          schema:
            type: integer
          in: path
          required: true
          examples:
            Example 0:
              value: null
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Purchase'
              examples:
                Example 0:
                  value:
                    itemId: N/A
                    stock: N/A
          description: Sale Operation
      operationId: Sale
      summary: Sale
      description: Sale
tags:
  - name: Purchase
    description: Purchase resource
---
paths:
  '/purchases/{id}/sale':
    summary: sale operation on purchases
    put:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                itemId:
                  description: itemId of this Sale
                  type: string
                qty:
                  description: qty of this Sale
                  type: integer
            examples:
              Example 0:
                value:
                  itemId: N/A
                  qty: N/A
      parameters:
        - name: id
          description: Sale name
          schema:
            type: integer
          in: path
          required: true
          examples:
            Example 0:
              value: null
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Purchase'
              examples:
                Example 0:
                  value:
                    itemId: N/A
                    stock: N/A
          description: Sale Operation
      operationId: Sale
      summary: Sale
      description: Sale
tags:
  - name: Purchase
    description: Purchase resource
---
paths:
  '/purchases/{id}/sale':
    summary: sale operation on purchases
    put:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                itemId:
                  description: itemId of this Sale
                  type: string
                qty:
                  description: qty of this Sale
                  type: integer
            examples:
              Example 0:
                value:
                  itemId: N/A
                  qty: N/A
      parameters:
        - name: id
          description: Sale name
          schema:
            type: integer
          in: path
          required: true
          examples:
            Example 0:
              value: null
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Purchase'
              examples:
                Example 0:
                  value:
                    itemId: N/A
                    stock: N/A
          description: Sale Operation
      operationId: Sale
      summary: Sale
      description: Sale
tags:
  - name: Purchase
    description: Purchase resource
---
paths:
  '/purchases/{id}/sale':
    summary: sale operation on purchases
    put:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                itemId:
                  description: itemId of this Sale
                  type: string
                qty:
                  description: qty of this Sale
                  type: integer
            examples:
              Example 0:
                value:
                  itemId: N/A
                  qty: N/A
      parameters:
        - name: id
          description: Sale name
          schema:
            type: integer
          in: path
          required: true
          examples:
            Example 0:
              value: null
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Purchase'
              examples:
                Example 0:
                  value:
                    itemId: N/A
                    stock: N/A
          description: Sale Operation
      operationId: Sale
      summary: Sale
      description: Sale
tags:
  - name: Purchase
    description: Purchase resource
`

export default apiSpec;