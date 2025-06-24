from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Transaction
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'transactions.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/api/transactions', methods=['GET'])
def get_transactions():
    transactions = Transaction.query.order_by(Transaction.date.desc(), Transaction.id.desc()).all()
    balance = 0
    result = []
    # Compute running balance from oldest to newest
    for tx in reversed(transactions):
        balance += tx.credit - tx.debit
        result.append(tx.to_dict(running_balance=balance))
    # Reverse back to descending date
    result = list(reversed(result))
    return jsonify(result)

@app.route('/api/transactions', methods=['POST'])
def add_transaction():
    data = request.json
    date = datetime.strptime(data['date'], '%Y-%m-%d').date()
    description = data['description']
    ttype = data['type']  # 'Credit' or 'Debit'
    amount = float(data['amount'])
    credit = amount if ttype == 'Credit' else 0.0
    debit  = amount if ttype == 'Debit' else 0.0

    tx = Transaction(date=date, description=description, credit=credit, debit=debit)
    db.session.add(tx)
    db.session.commit()
    return jsonify({'message': 'Transaction added'}), 201

if __name__ == '__main__':
    app.run(debug=True)